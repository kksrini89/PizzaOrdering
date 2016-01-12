using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Hosting;

namespace Kks.Service.Models
{
    public class Repository
    {
        #region Order

        #region CreateOrder
        internal bool CreateOrder(Order order)
        {
            bool result = false;
            //var orderFilePath = @"~/App_Data/orders.json";
            var orderFilePath = Path.Combine(HttpRuntime.AppDomainAppPath, "orders.json");
            if (null != order)
            {
                try
                {
                    var contents = JsonConvert.SerializeObject(order, Formatting.Indented);
                    File.WriteAllText(orderFilePath, contents);
                    result = true;
                }
                catch (Exception ex)
                {
                    throw;
                }
            }
            return result;
        }
        #endregion

        #region GetOrders
        internal List<Order> GetOrders()
        {
            string path = HttpContext.Current.Request.MapPath("~\\orders.json");
            var contents = string.Empty;
            if (!string.IsNullOrEmpty(path) && File.Exists(path))
                contents = File.ReadAllText(path);
            return JsonConvert.DeserializeObject<List<Order>>(contents);
        }
        #endregion

        #region GetOrder
        internal Order GetOrder(int id)
        {
            string path = HttpContext.Current.Request.MapPath("~\\orders.json");
            var contents = string.Empty;
            if (!string.IsNullOrEmpty(path) && File.Exists(path))
                contents = File.ReadAllText(path);
            return JsonConvert.DeserializeObject<Order>(contents);
        } 
        #endregion

        #endregion

        #region Product
        internal Product Create()
        {
            Product prod = new Product()
            {
                ReleaseDate = DateTime.Now
            };
            return prod;
        }

        internal List<Product> Retrieve()
        {
            var filePath = HostingEnvironment.MapPath(@"~/App_Data/items.json");
            var contents = File.ReadAllText(filePath);
            return JsonConvert.DeserializeObject<List<Product>>(contents);
        }

        internal Product Save(Product product)
        {
            var products = this.Retrieve();
            var maxId = products.Max(p => p.ProductId);
            product.ProductId = maxId + 1;
            products.Add(product);
            //var id = new Random().Next(1, 100000);
            //var returnedProduct = from prod in products
            //                      where prod.ProductId == product.ProductId
            //                      select prod;
            //products.Add(new Product()
            //{
            //    ReleaseDate = DateTime.Now,
            //    ProductId = new Random().Next(1, 100000),
            //    ProductName = product.ProductName,
            //    Price = product.Price,
            //    Description = product.Description
            //});
            this.WriteData(products);
            return product;
        }

        internal Product Save(int productId, Product product)
        {
            var products = this.Retrieve();
            foreach (var item in products)
            {
                if (null != item)
                {
                    if (string.IsNullOrEmpty(item.ProductId.ToString()))
                    {
                        var retrievedItem = products.Where(p => p.ProductId == product.ProductId).FirstOrDefault();
                        if (retrievedItem != null)
                        {
                            retrievedItem = product;
                        }
                    }
                }
            }
            WriteData(products);
            return product;
        }

        internal bool Delete(int ProductId)
        {
            var products = this.Retrieve();
            var tobeRemoved = products.Where(p => p.ProductId == ProductId).FirstOrDefault();
            return products.Remove(tobeRemoved);
        }

        internal bool WriteData(List<Product> products)
        {
            var filePath = HostingEnvironment.MapPath(@"~/App_Data/items.json");
            var contents = JsonConvert.SerializeObject(products, Formatting.Indented);
            File.WriteAllText(filePath, contents);
            return true;
        }
        #endregion
    }
}