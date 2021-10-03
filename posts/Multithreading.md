---
title: "Multithreading and it's Uses"
date: "2021-10-2"
image: multithreading.png
excerpt: “The way the processor industry is going, is to add more and more cores, but nobody knows how to program those things. I mean, two, yeah; four, not really; eight, forget it.” Steve Jobs, Apple.
isFeatured: false
---
#Multithreading
Multithreading is the ability of a central processing unit (CPU) (or a single core in a multi-core processor) to run many threads of code at the same time, with the operating system supporting it. Multiprocessing is not the same as this method. Threads in a multithreaded application share resources from a single or several cores, such as computational units, CPU caches, and the translation lookaside buffer (TLB).

Multithreading tries to increase the use of a single core by exploiting thread-level parallelism as well as instruction-level parallelism in multiprocessing systems with several full processing units in one or more cores.
Because the two approaches are complementary, they are used together in practically all modern system architectures that include multiple multithreading CPUs and multithreading cores.
<br>
##Overview
As efforts to utilise instruction-level parallelism have languished since the late 1990s, the multithreading paradigm has grown in popularity. Throughput computing was able to re-emerge from the more specialised field of transaction processing as a result of this. Even though it's tough to speed up a single thread or programme even further, most computer systems multitask between numerous threads or programmes. As a result, strategies that increase the throughput of all jobs improve overall performance.
<br>

Multithreading and multiprocessing are two main strategies for high-throughput computing.

<br>
##Advantages
If a thread has a high number of cache misses, the other threads can continue to utilise the unused computing resources, potentially resulting in faster overall execution, as these resources would have remained idle if only one thread was running. Additionally, if a thread can't utilise all of the CPU's computational resources (due to instructions that rely on each other's results), another thread can keep those resources from being idle.

##Disadvantages
When several threads share hardware resources like caches or translation lookaside buffers, they might cause problems (TLBs).
As a result, even when just one thread is running, execution times of a single thread are not enhanced and can be degraded due to lower frequencies or more pipeline stages required to handle thread-switching hardware.

Overall efficiency varies; Intel claims that its Hyper-Threading Technology improves performance by up to 30%,[1], while a synthetic programme conducting a loop of non-optimized dependent floating-point operations improves performance by 100% when executed in parallel.

Cache misses and idle computational resources are not a problem for hand-tuned assembly language programmes that use MMX or AltiVec extensions and do data prefetches (like a decent video encoder might). As a result, such programmes do not benefit from hardware multithreading and may experience performance degradation as a result of resource competition.

Hardware support for multithreading is more obvious to software than multiprocessing, and requires more changes to both application applications and operating systems. Hardware techniques for multithreading are frequently similar to software techniques for computer multitasking.
Thread scheduling is also a major problem in multithreading.

[Source](https://en.wikipedia.org/wiki/Multithreading_(computer_architecture))
