using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Azure.WebJobs.Extensions.CosmosDB;
using System.Configuration;
using System.Data.Common;
using System.Net.Http;

namespace Company.Function
{
    public static class GetResumeCounter
    {
        [FunctionName("GetResumeCounter")]
        public static HttpResponseMessage Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            [CosmosDB(databaseName: "AzureResume", containerName: "Counter", Connection = "AzureResumeConnectionString", Id = "1", PartitionKey = "1")] Counter counter,
            [CosmosDB(databaseName: "AzureResume", containerName: "Counter", Connection = "AzureResumeConnectionString")] out Counter updatedcounter,
            //Line 21 is going to do the "GET" request. This will allow us to retrieve the item where the value is 1 (which is the id) > connect to the DB "AzureResume" using the azure resume connection string, it will look for the item "id" inside of the container "counter", inside of the DB "AzureResume"
            // both lines are the CosmosDB binding that will allow us to connect to the DB 
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");
            
            counter.count += 1; //This is going to increase the count of the counter value by 1 (this will occur every time the page is visited)
            updatedcounter = counter; //This is going to update the counter value to the DB

            var Jsontoreturn = JsonConvert.SerializeObject(counter); //This is what we're going to see on the browser (its going to be available via the API)

            return new HttpResponseMessage(System.Net.HttpStatusCode.OK)
            {
                Content = new StringContent(Jsontoreturn, System.Text.Encoding.UTF8, "application/json")
            };
        }
    }
}
