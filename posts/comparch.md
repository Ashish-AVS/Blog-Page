---
title: "Power of Computer Architecture"
date: "2022-10-16"
image: ABasicComputer.gif
excerpt: "All architecture is great architecture after sunset; perhaps architecture is really a nocturnal art, like the art of fireworks." Gilbert K Chesterton
isFeatured: False
---

# Computer architecture
Block diagram of a basic computer with uniprocessor CPU. Black lines indicate data flow, whereas red lines indicate control flow. Arrows indicate the direction of flow.
In computer engineering, computer architecture is a set of rules and methods that describe the functionality, organization, and implementation of computer systems.

## History
The first documented computer architecture was in the correspondence between Charles Babbage and Ada Lovelace, describing the analytical engine. When building the computer Z1 in 1936, Konrad Zuse described in two patent applications for his future projects that machine instructions could be stored in the same storage used for data, i.e., the stored-program concept. Two other early and important examples are:

John von Neumann's 1945 paper, First Draft of a Report on the EDVAC, which described an organization of logical elements;
Alan Turing's more detailed Proposed Electronic Calculator for the Automatic Computing Engine, also 1945 and which cited John von Neumann's paper.
The term “architecture” in computer literature can be traced to the work of Lyle R. Johnson and Frederick P. Brooks, Jr., members of the Machine Organization department in IBM's main research center in 1959. Johnson had the opportunity to write a proprietary research communication about the Stretch, an IBM-developed supercomputer for Los Alamos National Laboratory (at the time known as Los Alamos Scientific Laboratory). To describe the level of detail for discussing the luxuriously embellished computer, he noted that his description of formats, instruction types, hardware parameters, and speed enhancements were at the level of “system architecture”, a term that seemed more useful than “machine organization”.


The earliest computer architectures were designed on paper and then directly built into the final hardware form. Later, computer architecture prototypes were physically built in the form of a transistor–transistor logic (TTL) computer—such as the prototypes of the 6800 and the PA-RISC—tested, and tweaked, before committing to the final hardware form. As of the 1990s, new computer architectures are typically "built", tested, and tweaked—inside some other computer architecture in a computer architecture simulator; or inside a FPGA as a soft microprocessor; or both—before committing to the final hardware form.

Subcategories
The discipline of computer architecture has three main subcategories:

## Instruction set architecture (ISA):
It defines the machine code that a processor reads and acts upon as well as the word size, memory address modes, processor registers, and data type.
Microarchitecture: also known as "computer organization", this describes how a particular processor will implement the ISA.

## Macroarchitecture:
architectural layers more abstract than microarchitecture
Assembly instruction set architecture: A smart assembler may convert an abstract assembly language common to a group of machines into slightly different machine language for different implementations.

## Microcode:
Microcode is software that translates instructions to run on a chip. It acts like a wrapper around the hardware, presenting a preferred version of the hardware's instruction set interface. This instruction translation facility gives chip designers flexible options: E.g. 1. A new improved version of the chip can use microcode to present the exact same instruction set as the old chip version, so all software targeting that instruction set will run on the new chip without needing changes. E.g. 2. Microcode can present a variety of instruction sets for the same underlying chip, allowing it to run a wider variety of software.
## UISA:
User Instruction Set Architecture, refers to one of three subsets of the RISC CPU instructions provided by PowerPC RISC Processors. The UISA subset, are those RISC instructions of interest to application developers.
## Pin architecture:
The hardware functions that a microprocessor should provide to a hardware platform. Pin architecture functions are more flexible than ISA functions because external hardware can adapt to new encodings, or change from a pin to a message.

## Implementation
Once an instruction set and micro-architecture have been designed, a practical machine must be developed. This design process is called the implementation. Implementation is usually not considered architectural design, but rather hardware design engineering. Implementation can be further broken down into several steps:

## Design goals
The exact form of a computer system depends on the constraints and goals. Computer architectures usually trade off standards, power versus performance, cost, memory capacity, latency (latency is the amount of time that it takes for information from one node to travel to the source) and throughput. Sometimes other considerations, such as features, size, weight, reliability, and expandability are also factors.

The most common scheme does an in-depth power analysis and figures out how to keep power consumption low while maintaining adequate performance.

## Performance
Modern computer performance is often described in instructions per cycle (IPC), which measures the efficiency of the architecture at any clock frequency; a faster IPC rate means the computer is faster. Older computers had IPC counts as low as 0.1 while modern processors easily reach near 1. Superscalar processors may reach three to five IPC by executing several instructions per clock cycle.[citation needed]

## Power efficiency
Power efficiency is another important measurement in modern computers. A higher power efficiency can often be traded for lower speed or higher cost. The typical measurement when referring to power consumption in computer architecture is MIPS/W (millions of instructions per second per watt).

Modern circuits have less power required per transistor as the number of transistors per chip grows. This is because each transistor that is put in a new chip requires its own power supply and requires new pathways to be built to power it. However the number of transistors per chip is starting to increase at a slower rate. Therefore, power efficiency is starting to become as important, if not more important than fitting more and more transistors into a single chip. Recent processor designs have shown this emphasis as they put more focus on power efficiency rather than cramming as many transistors into a single chip as possible.
