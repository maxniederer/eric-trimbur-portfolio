---
title: Totem Twist
order: 6
desc: A take on the classic Bop-It toy, Totem Twist has the user quickly perform one of three randomized tasks at an ever increasing pace.
image: /assets/img/totem1.jpg
imageAlt: A cylindrical machine with a countdown interface
---

## Overview

The Totem Twist was the final project in my junior design class. The task was to create a toy similar to the classic Bop-It toy. I worked on a team of three on this project, contributing primarily to overall system design, firmware, and mechanical design.

[Download the full report here.](https://www.erictrimbur.com/s/totemTwistReport-compressed.pdf)

## System Design

We designed the Totem Twist to have three modes of interaction, push buttons, a wheel to spin, and the signature twisting action of the whole enclosure. The spinning used a photo interrupt sensor. To acomplish the twisting, I designed the enclosure to have foam backed copper pads that would close when twisted. I included an elastic cord to keep the default position centered. All of this is fed into an ATmega328p microcontroller. The user was prompted via a four piece seven segment display, an audio que from a speaker, and two LEDs.

![ALT TEXT](/assets/img/totem1.jpg)

## Mechanical Design and Twist Mechanism

I designed the enclosure completely from scratch. Implementing the twisting action was both an electrical and mechanical challenge. I was effectively engineering a momentary twist button. My solution involved having two caps (the green ends of the cylinder) that twist around the central tube (main white segment). Two nubs stick out on the inside which have the copper contact pads. Foam provides a rudimentary debouncing effect. I also designed in hooks to allow for elastic cords to hold the caps on and stabilize it to a middle, normally open, position. These cords connect to central hooks that can be removed for easy installation of the cords.

![ALT TEXT](/assets/img/totem2.png)

## PCB and Firmware

The team and I designed the PCB in Altium Designer. I included mounting holes that match those in the enclosure, and a section of prototyping space that we planned to use should we have forgotten anything or wanted to later add any features. I wrote the code using some Arduino libraries and flashed using a programer. The basic layout of the firmware was an finite state machine that would transition between each state of the game waiting for the user response or otherwise timing out.

![ALT TEXT](/assets/img/totem3.png)

## Project Management

Throughout the design, the team worked using a scrum style framework. Multiple sprints were done to develop the project and we each talked about our work during our meetings. We broke down and assigned tasks in a Kanban board. Our code was managed on Github where we could collaborate.

![ALT TEXT](/assets/img/totem4.png)
