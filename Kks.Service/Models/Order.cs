using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Kks.Service.Models
{
    public class Order
    {
        public Order()
        {
            Products = new List<Product>();
            Customer = new Customer();
        }
        public Customer Customer { get; set; }
        public List<Product> Products { get; set; }
    }    
}