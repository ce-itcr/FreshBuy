using FreshBuy.Models;
using FreshBuy.src;
using FreshBuy.src.Entities;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FreshBuy.Controllers
{
    [EnableCors(origins: "http://localhost:4200/", headers: "*", methods: "*")]
    public class ProducerController : ApiController
    {
        ProducerModel producer_model = new ProducerModel();

        [HttpPost]
        [Route("api/producer/product/add")]
        public IHttpActionResult CreateProduct([FromBody] JObject new_product)
        {
            bool result = producer_model.create_product(
                (int)new_product["product_id"],
                (string)new_product["product_name"],
                (string)new_product["category"],
                (int)new_product["category_id"],
                (string)new_product["sale_mode"],
                (int)new_product["availability"],
                (int)new_product["price"],
                (string)new_product["photo"],
                (int)new_product["producer_id"]);

            if (result)
            {
                return Ok(new_product);
            }
            return NotFound();
        }

        [HttpPost]
        [Route("api/producer/product/update")]
        public IHttpActionResult UpdateProduct([FromBody] JObject product)
        {
            bool result = producer_model.update_product(
                (int)product["product_id"],
                (string)product["product_name"],
                (string)product["category"],
                (int)product["category_id"],
                (string)product["sale_mode"],
                (int)product["availability"],
                (int)product["price"],
                (string)product["photo"],
                (int)product["producer_id"]);

            if (result)
            {
                return Ok(product);
            }
            return NotFound();

        }

        [HttpPost]
        [Route("api/producer/product/delete")]
        public IHttpActionResult DeleteProducer([FromBody] JObject product)
        {
            {
                bool result = producer_model.delete_product(
                    (int)product["product_id"]);


                if (result)
                {
                    return Ok(product);
                }
                return NotFound();
            }
        }


    }
}