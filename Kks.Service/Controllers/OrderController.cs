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
    public class OrderController : ApiController
    {
        // GET api/order
        public IEnumerable<Order> Get()
        {
            return new Repository().GetOrders();
        }

        // GET api/order/5
        public Order Get(int id)
        {
            return new Repository().GetOrder(id);
        }

        // POST api/order
        public void Post([FromBody]Order order)
        {
            if (order != null)
            {
                bool value = new Repository().CreateOrder(order);
            }
        }

        // PUT api/order/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/order/5
        public void Delete(int id)
        {
        }
    }
}
