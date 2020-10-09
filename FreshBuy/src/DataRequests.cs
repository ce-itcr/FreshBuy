using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Web;

namespace FreshBuy.src
{
    public class DataRequests
    {
        private const string V = "to: ";
        public static String execution_path = AppDomain.CurrentDomain.BaseDirectory;
        public static String data_path = execution_path + "\\App_Data";

        public static String admins_path = data_path + "\\admin.json";
        public static String affiliations_path = data_path + "\\affiliations.json";
        public static String categories_path = data_path + "\\categories.json";
        public static String consumer_path = data_path + "\\consumer.json";
        public static String producer_path = data_path + "\\producer.json";
        public static String products_path = data_path + "\\products.json";
        public static String purchases_path = data_path + "\\purchases.json";

        /*------------------------------------------------------------------------------------Data Operations------------------------------------------------------------------------------------*/

        /// <summary>
        /// Performs a SELECT statement on the target file
        /// </summary>
        /// <param name="entity_set_path"></param>
        /// <param name="key_attribute"></param>
        /// <returns>The return value of the SELECT operation is a strongly-typed result set that contains the specified value of the target file</returns>
        public String SELECT(String entity_set_path, int key_attribute)
        {
            Console.WriteLine("A SELECT process has been started on the entity set" + entity_set_path);
            String[] current_entity_set = File.ReadAllLines(entity_set_path);
            JObject entity_to_analyze;

            for (int i = 0; i < current_entity_set.Length; i++)
            {
                entity_to_analyze = JObject.Parse(current_entity_set[i]);
                if (entity_set_path == consumer_path || entity_set_path == producer_path)
                {
                    if ((int)entity_to_analyze["person_id"] == key_attribute)
                    {
                        Console.WriteLine("The request entity has been found: " + current_entity_set[i]);
                        return current_entity_set[i];
                    }
                }
                else if (entity_set_path == products_path || entity_set_path == admins_path)
                {
                    if ((int)entity_to_analyze["prduct_id"] == key_attribute)
                    {
                        Console.WriteLine("The request entity has been found: " + current_entity_set[i]);
                        return current_entity_set[i];
                    }
                }
                else if (entity_set_path == purchases_path)
                {
                    if ((int)entity_to_analyze["purchase_id"] == key_attribute)
                    {
                        Console.WriteLine("The request entity has been found: " + current_entity_set[i]);
                        return current_entity_set[i];
                    }
                }
                else if (entity_set_path == affiliations_path)
                {
                    if ((int)entity_to_analyze["affiliation _id"] == key_attribute)
                    {
                        Console.WriteLine("The request entity has been found: " + current_entity_set[i]);
                        return current_entity_set[i];
                    }
                }
                else
                {
                    if ((int)entity_to_analyze["id"] == key_attribute)
                    {
                        Console.WriteLine("The request entity has been found: " + current_entity_set[i]);
                        return current_entity_set[i];
                    }
                }
            }
            Console.WriteLine("Request entity not found" + entity_set_path);
            return null;
        }

        /// <summary>
        /// Performs a INSERT statement on the target file
        /// </summary>
        /// <param name="entity_set_path"></param>
        /// <param name="new_entity"></param>
        public void INSERT(String entity_set_path, String new_entity)
        {
            Console.WriteLine("A SELECT process hsa been started on the entity set" + entity_set_path);
            String[] current_entity_set = File.ReadAllLines(entity_set_path);
            StreamWriter streamWriter = new StreamWriter(entity_set_path);

            for (int i = 0; i < current_entity_set.Length; i++)
            {
                streamWriter.WriteLine(current_entity_set[i]);
            }
            Debug.Print("New entity was inserted: " + new_entity);
            streamWriter.WriteLine(new_entity);
            streamWriter.Close();
        }

        /// <summary>
        /// Performs a WRITE statement on the target file
        /// </summary>
        /// <param name="entity_set_path"></param>
        /// <param name="new_entity_set"></param>
        public void WRITE(String entity_set_path, String[] new_entity_set)
        {
            Console.WriteLine("A WRITE process has been started on the entity set" + entity_set_path);
            StreamWriter streamWriter = new StreamWriter(entity_set_path);

            for (int i = 0; i < new_entity_set.Length; i++)
            {
                streamWriter.WriteLine(new_entity_set[i]);
            }
            streamWriter.WriteLine("New entity was writed: " + new_entity_set);
            streamWriter.Close();
        }

        /// <summary>
        /// Performs a DELETE statement on the target file
        /// </summary>
        /// <param name="entity_set_path"></param>
        /// <param name="key_attribute"></param>
        /// <returns>Return a bool value and the number of rows deleted</returns>
        public bool DELETE(String entity_set_path, int key_attribute)
        {
            Console.WriteLine("A DELETE process has been started on the entity set" + entity_set_path);
            String[] current_entity_set = File.ReadAllLines(entity_set_path);
            String[] new_entity_set = { };
            JObject entity_to_analyze;

            for (int i = 0; i < current_entity_set.Length; i++)
            {
                entity_to_analyze = JObject.Parse(current_entity_set[i]);
                if (entity_set_path == consumer_path || entity_set_path == producer_path)
                {
                    if (!((int)entity_to_analyze["person_id"] == key_attribute))
                    {
                        Console.WriteLine("The request entity has been removed: " + current_entity_set[i]);
                    }
                }
                else if (entity_set_path == products_path || entity_set_path == admins_path)
                {
                    if (!((int)entity_to_analyze["prduct_id"] == key_attribute))
                    {
                        Console.WriteLine("The request entity has been removed: " + current_entity_set[i]);
                    }
                }
                else if (entity_set_path == purchases_path)
                {
                    if (!((int)entity_to_analyze["purchase_id"] == key_attribute))
                    {
                        Console.WriteLine("The request entity has been removed: " + current_entity_set[i]);
                    }
                }
                else if (entity_set_path == affiliations_path)
                {
                    if (!((int)entity_to_analyze["affiliation _id"] == key_attribute))
                    {
                        Console.WriteLine("The request entity has been removed: " + current_entity_set[i]);
                    }
                }
                else
                {
                    if (!((int)entity_to_analyze["id"] == key_attribute))
                    {
                        new_entity_set = new_entity_set.Concat(new String[] { current_entity_set[i] }).ToArray();
                    }
                    else
                    {
                        Console.WriteLine("The request entity has been removed: " + current_entity_set[i]);
                    }
                }
            }

            if (current_entity_set.Length == new_entity_set.Length)
            {
                Console.WriteLine("Request entity not found " + entity_set_path);
                return false;
            }
            else
            {
                WRITE(entity_set_path, new_entity_set);
                return true;
            }
        }

        /// <summary>
        /// Performs a UPDATE statement on the target file
        /// </summary>
        /// <param name="entity_set_path"></param>
        /// <param name="key_attribute"></param>
        /// <param name="attribute_to_modify"></param>
        /// <param name="new_txt_value"></param>
        /// <param name="new_num_value"></param>
        /// <returns></returns>
        public bool UPDATE(String entity_set_path, int key_attribute, String attribute_to_modify, String new_txt_value, int new_num_value)
        {
            Console.WriteLine("A UPDATE process has been started on the entity set" + entity_set_path);
            String entity_to_modify = SELECT(entity_set_path, key_attribute);

            if (entity_to_modify != null)
            {
                DELETE(entity_set_path, key_attribute);
                JObject modified_entity = JObject.Parse(entity_to_modify);

                if (new_txt_value != null)
                {
                    modified_entity[attribute_to_modify] = new_txt_value;
                }
                else
                {
                    modified_entity[attribute_to_modify] = new_num_value;
                }
                INSERT(entity_set_path, JsonConvert.SerializeObject(modified_entity));
                Console.WriteLine("The request entity has been updated from: " + entity_to_modify + V + JsonConvert.SerializeObject(entity_to_modify));
                return true;
            }
            else
            {
                Console.WriteLine("Request entity not found " + entity_set_path);
                return false;
            }
        }


        /*------------------------------------------------------------------------------------Data Algorithms------------------------------------------------------------------------------------*/
        /// <summary>
        /// A FILTER statement select only those records that match certain criteria
        /// </summary>
        /// <param name="entity_set_path"></param>
        /// <param name="attribute_to_search"></param>
        /// <param name="attribute_required"></param>
        /// <param name="required_txt_value"></param>
        /// <param name="required_num_value"></param>
        /// <returns></returns>
        public String[] FILTER(String entity_set_path, String attribute_to_search, String required_txt_value, int required_num_value)
        {
            Console.WriteLine("A FILTER process has been started on the entity set" + entity_set_path);
            String[] current_entity_set = File.ReadAllLines(entity_set_path);
            String[] filter_entity_set = { };
            JObject entity_to_analyze;

            for (int i = 0; i < current_entity_set.Length; i++)
            {
                entity_to_analyze = JObject.Parse(current_entity_set[i]);
                if (required_txt_value != null)
                {
                    if ((string)entity_to_analyze[attribute_to_search] == required_txt_value)
                    {
                        Console.WriteLine("Entity has been found " + current_entity_set[i]);
                        filter_entity_set = filter_entity_set.Concat(new String[] { current_entity_set[i] }).ToArray();
                    }
                }
                else
                {
                    if ((int)entity_to_analyze[attribute_to_search] == required_num_value)
                    {
                        Console.WriteLine("Entity has been found " + current_entity_set[i]);
                        filter_entity_set = filter_entity_set.Concat(new String[] { current_entity_set[i] }).ToArray();
                    }
                }
            }
            return filter_entity_set;
        }

        /// <summary>
        /// A SORT statement is used to sort the fetched data.
        /// </summary>
        /// <param name="entity_set_path"></param>
        /// <param name="attribute_to_sort"></param>
        /// <returns></returns>
        public String[] SORT(String entity_set_path, String attribute_to_sort)
        {
            Console.WriteLine("A SORT process has been started on the entity set" + entity_set_path);
            String[] current_entity_set = File.ReadAllLines(entity_set_path);
            String temporal_entity;

            for (int i = 0; i < current_entity_set.Length; i++)
            {
                for (int j = 0; j < current_entity_set.Length - 1; j++)
                {
                    JObject entity_A = JObject.Parse(current_entity_set[j]);
                    JObject entity_B = JObject.Parse(current_entity_set[j + 1]);
                    if ((int)entity_A[attribute_to_sort] < (int)entity_B[attribute_to_sort])
                    {
                        temporal_entity = current_entity_set[j + 1];
                        current_entity_set[j + 1] = current_entity_set[j];
                        current_entity_set[j] = temporal_entity;
                    }
                }

            }
            Console.WriteLine("The set of ordered attributes is: ");
            for (int i = 0; i < current_entity_set.Length; i++)
            {
                Console.WriteLine(current_entity_set[i]);
            }
            return current_entity_set;
        }
    }
}