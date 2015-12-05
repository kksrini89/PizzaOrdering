using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;

namespace Kks.Service.Models
{
    public class Repository
    {
        internal List<Product> RetrieveProducts()
        {
            var filePath=HostingEnvironment.MapPath(@"~/App_Data/items.json");
            var products=JsonConvert.DeserializeObject<List<Product>>(filePath);
            return products;            
        }

        internal List<Product> SaveProducts()
        {

        }
        internal Product SaveProduct()
        {

        }
    }
}