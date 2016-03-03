using Kks.Service.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
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
        public void Post([FromBody]JObject order)
        {
            dynamic json = order;
            JObject customer = json.customer;
            JArray products = json.selectedPizzas;
            DateTime date = json.orderedDate;

            var orderedCustomer = customer.ToObject<Customer>();
            var orderedProducts = products.ToObject<List<Product>>();

            //date = DateTime.SpecifyKind(date, DateTimeKind.Local);
            var finalOrder = new Order() { Customer = orderedCustomer, Products = orderedProducts, OrderedDate = date };

            if (finalOrder != null)
            {
                bool value = new Repository().CreateOrder(finalOrder);
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
