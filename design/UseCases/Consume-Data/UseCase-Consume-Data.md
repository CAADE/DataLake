[Data consumers](Actor-Data-Consumer) consume data from the data lake through the Egress Engine.
Data can be consumed in several different ways. And only after security has validated
the identity of the data consumer and given the apporpiate authnorization and access.
Data Can be consumed in the following mechanisms.

It is the repsonsibiliy of the [Operations Manager](Actor-Operations-Manager) to specify the
types of Egress Types and who has access to what. This can be automated through a self
service portal as allowed.

## Actors

* [Data Consumer](Actor-Data-Consumer)

## Scenarios

* [Analyze Data](Scenario-Analyze-Data)
* [Query Data Store](Scenario-Query-Data-Store)
* [Subscribe to Data](Scenario-Subscribe-to-Data)
* [Visualize Data](Scenario-Visualize-Data)


## Activities

![Image](./UseCases/Govern-Data/Activities.png)

## Systems Involved

* [Egress Engine](SubSystem-Egress-Engine)

