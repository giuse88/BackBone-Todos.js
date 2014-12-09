module.exports = function () {
  return this.http.get("/status");
};