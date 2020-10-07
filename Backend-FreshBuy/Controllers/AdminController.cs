using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Backend_FreshBuy.DBMS;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        DBMS _dbms = new DBMS();

        // GET: api/<AdminController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<AdminController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AdminController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<AdminController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AdminController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpPost]
        [Route("Producer/new")]
        public System.Web.Http.IHttpActionResult CreateProducer([FromBody] JObject new_producer)
        {
            {
                bool result = _dbms.create_producer(
                    (int)new_producer["person_id"],
                    (string)new_producer["name"],
                    (string)new_producer["last_name"],
                    (string)new_producer["province"],
                    (string)new_producer["canton"],
                    (string)new_producer["district"],
                    (string)new_producer["birt_date"],
                    (double)new_producer["phone_number"],
                    (double)new_producer["sinpe_number"],
                    new_producer.SelectToken("delivery_locations")?.ToObject<string[]>(),
                    (string)new_producer["password"]);

                if (result == true)
                {
                    return (System.Web.Http.IHttpActionResult)Ok(new_producer);
                }
                return (System.Web.Http.IHttpActionResult)NotFound();
            }

        }


    }
}
