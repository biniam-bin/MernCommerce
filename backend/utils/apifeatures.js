class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
              $regx: this.queryStr.keyword,
              $options: "i"
          },
        }
      : {};
  }
}

module.exports = ApiFeatures;
