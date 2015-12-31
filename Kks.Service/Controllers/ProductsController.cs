using Kks.Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Kks.Service.Controllers
{
    [EnableCorsAttribute("http://localhost:46023", "*", "*")]
    public class ProductsController : ApiController
    {
        // GET api/products
        public IEnumerable<Product> Get()
        {
            return new Repository().Retrieve();
        }

        // GET api/products/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/products
        public void Post([FromBody]string value)
        {
        }

        // PUT api/products/5
        public void Put(int id, [FromBody]Product value)
        {
            var repository = new Repository();
            repository.Save(id, value);
        }

        // DELETE api/products/5
        public void Delete(int id)
        {
            var repo = new Repository();
            repo.Delete(id);
        }
    }
}
