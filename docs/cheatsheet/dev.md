---
title: 技术名词解释
---

## 云计算

云计算（英语：cloud computing），也被意译为网络计算，是一种基于互联网的计算方式，通过这种方式，共享的软硬件资源和信息可以按需求提供给计算机各种终端和其他设备，使用服务商提供的电脑基建作计算和资源。

云计算是指在云中运行工作负载，而云是一种能够抽象、汇集和共享整个网络中的可扩展资源的 IT 环境。云计算和云本身都不属于技术的范畴。

- 云计算是指在云中运行工作负载的功能。
- 而云是一种环境，是运行应用的地方。
- 技术则是指用于构建和使用云的软件和硬件。

### BFF

服务于前端的后端（英语：Backend-For-Frontend，缩写：BFF） 本质上是 API 网关模式的一个变体。它还在微服务和客户端之间提供了一个附加层。但它不是单个入口点，而是为每个客户端引入了多个网关。 使用 BFF，您可以添加针对每个客户端的需求量身定制的 API，从而消除因将所有内容集中在一个地方而导致的大量臃肿。

### SaaS

软件即服务（英语：Software as a Service，缩写：SaaS，发音：sæs或sɑs），亦可称为“按需即用软件”（即“一经要求，即可使用”），它是一种软件交付模式。在这种交付模式中，软件仅需通过网络，不须经过传统的安装步骤即可使用，软件及其相关的数据集中托管于云端服务。用户通常使用精简客户端，一般即经由网页浏览器来访问、访问软件即服务。SaaS 最大的特色在于软件本身并没有被下载到用户的硬盘，而是存储在提供商的云端或者服务器。对比传统软件需要花钱购买，下载。软件即服务只需要用户租用软件，在线使用，不但大大减少了用户购买风险, 也无需下载软件本身，无设备要求的限制。

### IaaS

基础设施即服务（英语：Infrastructure as a Service，简称IaaS）是提供消费者处理、储存、网络以及各种基础运算资源，以部署与执行操作系统或应用程序等各种软件。

IaaS 是云服务的最底层，主要提供一些基础资源。它与 PaaS 的区别是，用户需要自己控制底层，实现基础设施的使用逻辑。 客户端无须购买服务器、软件等网络设备，即可任意部署和运行处理、存储、网络和其它基本的计算资源，不能控管或控制底层的基础设施，但是可以控制操作系统、储存装置、已部署的应用程序，有时也可以有限度地控制特定的网络元件，像是主机端防火墙。

### PaaS

平台即服务（英语：platform as a service，缩写：PaaS）是一种云计算服务，提供运算平台与解决方案服务。在云计算的典型层级中，PaaS层介于软件即服务与基础设施即服务之间。

PaaS提供用户将云端基础设施部署与创建至客户端，或者借此获得使用编程语言、程序库与服务。用户不需要管理与控制云端基础设施（包含网络、服务器、操作系统或存储），但需要控制上层的应用程序部署与应用托管的环境。

PaaS将软件研发的平台做为一种服务，以软件即服务（SaaS）模式交付给用户。因此，PaaS也是SaaS模式的一种应用。但是，PaaS的出现可以加快SaaS的发展，尤其是加快SaaS应用的开发速度。

PaaS 提供软件部署平台（runtime），抽象掉了硬件和操作系统细节，可以无缝地扩展（scaling）。开发者只需要关注自己的业务逻辑，不需要关注底层。

### BaaS

后端即服务 (BaaS) 使开发人员可以专注于应用程序的前端，无需构建或维护后端服务即可利用。BaaS 和无服务器计算有一些相似之处，许多提供商都提供两者，但是两种模型有一些差异。

### FaaS

功能即服务 (FaaS) 是一类云计算服务，它提供了一个平台，允许客户开发、运行和管理应用程序功能，而无需构建和维护通常与开发和启动应用程序相关的基础设施。按照此模型构建应用程序是实现“无服务器”架构的一种方式，通常用于构建微服务应用程序。

### DaaS

在计算领域，数据即服务（Data as a service，简称DaaS）是指在线数据服务，开发者将开发用的数据保存在互联网上并随时访问，而无需使用保存在本地计算机上的数据库。

:::tip 参考链接

- [[wiki] 云计算](https://zh.wikipedia.org/wiki/%E9%9B%B2%E7%AB%AF%E9%81%8B%E7%AE%97)
- [什么是云计算？](https://www.redhat.com/zh/topics/cloud)
- [什么是无服务器？](https://www.redhat.com/zh/topics/cloud-native-apps/what-is-serverless)
- [Pattern: API Gateway / Backends for Frontends Context](https://microservices.io/patterns/apigateway.html)
- [Pattern: Backends For Frontends](https://samnewman.io/patterns/architectural/bff/)
- [Microservices design patterns for CTOs: API Gateway, Backend for Frontend and more](https://tsh.io/blog/design-patterns-in-microservices-api-gateway-bff-and-more/)
- [[wiki] 软件即服务](https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E5%8D%B3%E6%9C%8D%E5%8A%A1)
- [[wiki] 平台即服务](https://zh.wikipedia.org/wiki/%E5%B9%B3%E5%8F%B0%E5%8D%B3%E6%9C%8D%E5%8A%A1)
- [什么是 PaaS？](https://azure.microsoft.com/zh-cn/overview/what-is-paas)
- [什么是平台即服务（PaaS）？PaaS SaaS IaaS 区别解析](https://www.redhat.com/zh/topics/cloud-computing/what-is-paas)
- [[wiki] Mobile backend as a service](https://en.wikipedia.org/wiki/Mobile_backend_as_a_service)
- [什么是 BaaS？|后端即服务与无服务器](https://www.cloudflare.com/zh-cn/learning/serverless/glossary/backend-as-a-service-baas/)
- [Function as a service](https://en.wikipedia.org/wiki/Function_as_a_service)
- [什么功能即服务 (FaaS)？](https://www.cloudflare.com/zh-cn/learning/serverless/glossary/function-as-a-service-faas/)
- [什么是功能即服务（FaaS）？](https://www.redhat.com/zh/topics/cloud-native-apps/what-is-faas)
- [从IaaS到FaaS—— Serverless架构的前世今生](https://aws.amazon.com/cn/blogs/china/iaas-faas-serverless/)
- [FaaS (Function-as-a-Service)](https://www.ibm.com/cloud/learn/faas)
- [[wiki] 数据即服务](https://zh.wikipedia.org/wiki/%E6%95%B8%E6%93%9A%E5%8D%B3%E6%9C%8D%E5%8B%99)

:::
