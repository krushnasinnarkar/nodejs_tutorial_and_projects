const Product = require('../models/product');

// for manually handaling query
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ price: { $gt: 30 } }) //only the product with price greater than 30
    .sort('price')  //asc
    // .sort('-price') //dsc
    // .sort('-name price')  //first sorted by name in descending order, Within each name group, documents are sorted by price in ascending order.
    .select('name price') //return only name and price
    .limit(4) //gives only 4 documents/items
    .skip(5); //skips first 5 documents/items

  res.status(200).json({ products, nbHits: products.length });
};

// for automatic handaling query
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query;  //mongoose will ignore the properties which are not in schema
  const queryObject = {};

  if (featured) { // /products?featured=true
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {  // /products?company=caressa
    queryObject.company = company;
  }
  if (name) { // /products?name=modern
    // queryObject.name = name; // it will only give o/p for perfesct match
    queryObject.name = { $regex: name, $options: 'i' }; // $regex is a query operator and $options:i i is for case insensitive
  }

  // console.log(queryObject)

  if (numericFilters) { // /products?numericFilters=price>30,rating>=4
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace( //price>30,rating>=4 to price-$gt-30,rating-$gte-4
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ['price', 'rating'];  //thosse are the only properties who uses number value
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-'); //price-$gt-30 to [field=price, operator=$gt, value=30]
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) }; //{price:{'$gt':30}, rating{'$gte':4}}
      }
    });
  }

  let result = Product.find(queryObject);
  // sort
  if (sort) { // /products?sort=price
    const sortList = sort.split(',').join(' '); //sort: name,-price => sortList: name -price
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt');  // by default sort by createdAt
  }

  // select 
  if (fields) { // /products?fields=name,price
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList);
  }

  // pagination
  const page = Number(req.query.page) || 1; ///products?page=2
  const limit = Number(req.query.limit) || 10;  // /products?limit=2
  const skip = (page - 1) * limit;  //skips 10 for page 2, 20 for page 3...

  result = result.skip(skip).limit(limit);

  const products = await result;

  // const products = await Product.find(req.query);  // if we kee only this line it will still works

  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
