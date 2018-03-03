# Services/Egress-Engine

Services/Egress-Engine is a subsystem of data-lake and is responsible for getting data
out of the data lake. This includes several different mechanisms including but not limited
to API gateway, Data Exchange Endpoint, Publish Subscribe for Streaming cases, Exposure to
data storage (SQL, Query, NoQuery, Raw Data). All in a context of security, auditability,
and compliance.

Data Can only be retrived from the data lake through the egress engine.

## Use Cases

* 

![Image](./Solution/Services/Egress-Engine/UseCases.png)

## Actors
* [Data Consumer](Actor-Data-Consumer)

### Users 

* [User](User)

![Image](./Solution/Services/Egress-Engine/UserInteraction.png)

### Uses

* [SubSystem](./Solution/Services/Egress-Engine/SubSystem-Egress-Engine.md)
* 

## Interface

* CLI - Command Line Interface
* REST-API - 
* Portal - Web Portal

## Logical Artifacts

*

![Image](./Solution/Services/Egress-Engine/Logical.png)

## Activities and Flows 

![Image](./Solution/Services/Egress-Engine/Process.png)

## Deployment Architecture

![Image](./Solution/Services/Egress-Engine/Deployment.png)

## Physical Architecture

![Image](./Solution/Services/Egress-Engine/Physical.png)

