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

namespace FreshBuy.Controllers
{

    [EnableCors(origins: "http://localhost:4200/", headers: "*", methods: "*")]
    public class AdminController : ApiController
    {

        DBMS _dbms = new DBMS();


        [HttpPost]
        [Route("api/Admin/Producer/addtest2")]
        public IHttpActionResult AddProducer([FromBody] Object new_producer)
        {
            bool result = true;
            if (!result)
            {
                return NotFound();
            }
            Debug.Print(new_producer.ToString());
            return Ok(new_producer);
        }

        [HttpPost]
        [Route("api/Admin/Producer/add")]
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
