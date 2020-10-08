using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BackEnd_Pruebas.Controllers
{
    [EnableCors(origins: "http://localhost:4200/", headers: "*", methods: "*")]
    public class ConsumerController : ApiController
    {

        [HttpGet]
        public IEnumerable<string> Get()
        {
            Debug.Print("Hola");
            return new string[] { "value1", "value2" };
        }


        [HttpPost]
        [Route("api/Admin/Consumer/addtest2")]
        public IHttpActionResult AddConsumer([FromBody] Object new_producer)
        {
            bool result = true;
            if (!result)
            {
                return NotFound();
            }
            Debug.Print(new_producer.ToString());
            return Ok(new_producer);
        }


    }
}
