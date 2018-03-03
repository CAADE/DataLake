
A Data Lake is an unstructured data store. It has no schema, or structure. Data is stored in 
its raw format. 

## Chacateristics of a DataLake
* Data Lineage
* Data Governance
* Accessibility - security, who has access to what?
* Flexibility -  
* Ingestion - Legacy data cannot be moved must be connected. There needs to be a Data layer abstract that allows 
  for plugins to other data sources (NFS, HDFS, Object storage, Public cloud). This is similar to the Cloud
  layer for other architectures, but it is different than just the cloud layer. It would sit on top 
  of the cloud layer. It needs to have the ability to extend the SDS(Software Defined Storage) to create a
  SDD (Software Defined Data).
* Metadata management
* Auditability -
* BigDL gives a distributed Spark and hadoop
* Blue Data???



## References
* [Knowledgent](https://knowledgent.com/whitepaper/design-successful-data-lake/)
* [Blue Granite](https://www.blue-granite.com/blog/bid/402596/top-five-differences-between-data-lakes-and-data-warehouses)
* [Zaloni](https://www.zaloni.com/platform/)
* [Martin Fowler](https://martinfowler.com/bliki/Datensparsamkeit.html)
* [Martin Fowler 2](https://martinfowler.com/bliki/DataLake.html)

## [Users](Actors)

 * [Data Consumer](Actor-Data-Consumer) - Consumes information created by the Data Scientist
 * [Data Scientist](Actor-Data-Scientist) - Creates information from the Data Lake for consumers
 * [Data Source](Actor-Data-Source) - Source of data for the Data Lake.
 * [Operations Manager](Actor-Operations-Manager) - Manages the operations of the Data Lake.
 * [Stack Developer](Actor-Stack-Developer) - Develops stacks of services to be consumed by the Data Scientist.

## High level Use Cases

* [Consume Data](UseCase-Consume-Data) - Consume Data from the Data Lake
* [Govern Data](UseCase-Govern-Data) - Govern Data in the Data Lake
* [Ingest Data](UseCase-Ingest-Data) - Ingest Data into the Data Lake
* [Manage Data Blueprints](UseCase-Data-Blueprints) - Manage reusable Data Blueprints in a repo.
* [Manage Data Catalog](UseCase-Data-Catalog) - Manage the Data Catalog that describes the Data Catalog.
* [Manage Data Exchange](UseCase-Data-Exchange) - Setup and manage data exchange between multiple clouds or data sources.
* [Manage Data Lifecycle](UseCase-Data-Lifecycle) - Manage the lifecycle of the data. When it migrates to other tiers or is removed.
* [Manage Egress Engine](UseCase-Egress-Engine) - Manage the export or egress points of the Data Lake.
* [Manage Ingestion](UseCase-Manage-Ingestion) - Manage the ingestion points of the Data Lake. 
* [Manage Meta Data](UseCase-Manage-Meta-Data) - Manage the Meta Data in the Data Lake.
* [Manage Service Stack](UseCase-Service-Stack) - Manage Service Stacks in the Data Lake. This is an extension of the common cloud core

![Image](./UseCases/UseCases.png)

## Logical Architecture

The system has a typical service layer, cloud layer and hardware layer architecture. Additionally there
is a Software Defined Data layer that is an extenstion of the traditional Software Defined Storage(SDD) 
Subsystem. The SDD abstracts typical storage access and see it as a data fabric/plane that the services
can access reliably and consistently. This contains a set of connectors and plugins for the different 
filesystems, types of storage, etc...

![Image](./Solution/Logical.png)

_Systems_

## Process Architecture

![Image](./Solution/Processs.png)

## Deployment model

_Description_

![Image](./Solution/Deployment.png)

## Physical Architecture

_Description_

![Image](./Solution/Physical.png)

_Systems_

