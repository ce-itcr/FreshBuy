using FreshBuy.Models;
using FreshBuy.src;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Results;

namespace FreshBuy.Controllers
{

    [EnableCors(origins: "http://localhost:4200/", headers: "*", methods: "*")]
    public class AdminController : ApiController
    {

        AdminModel admin_model = new AdminModel();

        [HttpGet]
        [Route("api/admin/producers/getProducers")]
        public string[] getProducers()
        {
            string[] result = admin_model.find_producers();

            return result;
        }

        [HttpGet]
        [Route("api/admin/affiliations/getAffiliations")]
        public string[] getAffiliations()
        {
            string[] result = admin_model.find_affiliations();

            return result;
        }

        [HttpGet]
        [Route("api/admin/categories/getCategories")]
        public string[] getCategories()
        {
            string[] result = admin_model.find_categories();

            return result;
        }

        [HttpPost]
        [Route("api/admin/products/add")]
        public IHttpActionResult CreateProduct([FromBody] JObject new_product)
        {
            {
                bool result = admin_model.add_products_to_stock(
                    (int)new_product["product_id"],
                    (string)new_product["product_name"],
                    (int)new_product["category_id"],
                    (string)new_product["category_name"]);

                if (result)
                {
                    return Ok(new_product);
                }
                return NotFound();
            }
        }


        [HttpPost]
        [Route("api/admin/categories/add")]
        public IHttpActionResult CreateCategory([FromBody] JObject new_category)
        {
            {
                bool result = admin_model.create_category(
                    (int)new_category["category_id"],
                    (string)new_category["category_name"]);

                if (result)
                {
                    return Ok(new_category);
                }
                return NotFound();
            }
        }

        [HttpPost]
        [Route("api/admin/categories/update")]
        public IHttpActionResult UpdateCategory([FromBody] JObject category)
        {
            {
                bool result = admin_model.update_category(
                    (int)category["category_id"],
                    (string)category["category_name"]);

                if (result)
                {
                    return Ok(category);
                }
                return NotFound();
            }
        }

        [HttpPost]
        [Route("api/admin/categories/delete")]
        public IHttpActionResult DeleteCategory([FromBody] JObject category)
        {
            {
                bool result = admin_model.delete_category(
                    (int)category["category_id"]);

                if (result)
                {
                    return Ok(category);
                }
                return NotFound();
            }
        }

        [HttpPost]
        [Route("api/admin/producer/update")]
        public IHttpActionResult UpdateProducer([FromBody] JObject producer)
        {
            {
                bool result = admin_model.update_producer(
                                    (int)producer["person_id"],
                                    (string)producer["name"],
                                    (string)producer["last_name"],
                                    (string)producer["province"],
                                    (string)producer["canton"],
                                    (string)producer["district"],
                                    (string)producer["birt_date"],
                                    (double)producer["phone_number"],
                                    (double)producer["sinpe_number"],
                                    producer.SelectToken("delivery_locations")?.ToObject<string[]>(),
                                    (string)producer["username"],
                                    (string)producer["password"]);

                if (result)
                {
                    return Ok(producer);
                }
                return NotFound();
            }
        }

        [HttpPost]
        [Route("api/admin/producer/delete")]
        public IHttpActionResult DeleteProducer([FromBody] JObject producer)
        {
            {
                bool result = admin_model.delete_producer(
                    (int)producer["producer_id"]);

                if (result)
                {
                    return Ok(producer);
                }
                return NotFound();
            }
        }

        [HttpPost]
        [Route("api/admin/affiliation/accept")]
        public IHttpActionResult AcceptAffiliation([FromBody] JObject affiliation)
        {
            {
                
                admin_model.find_affiliation((int)affiliation["producer_id"]);
                DeleteAffiliation(affiliation);
                return Ok(affiliation);
            }
        }

        [HttpPost]
        [Route("api/admin/affiliation/delete")]
        public IHttpActionResult DeleteAffiliation([FromBody] JObject affiliation)
        {
            {
                bool result = admin_model.delete_affiliation(
                    (int)affiliation["producer_id"]);

                if (result)
                {
                    return Ok(affiliation);
                }
                return NotFound();
            }
        }
    }
}
