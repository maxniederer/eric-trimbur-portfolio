---
title: Planetary Lander
order: 3
desc: Made for NASA’s USLI competition, this autonomous lander is jettisoned out of the launch vehicle during descent to land, self-level, and send back a panoramic photo.
image: /assets/img/lander1.png
imageAlt: A 3D mockup of the planetary lander
---

## Overview

I was the payload team lead during the 2020-2021 NASA USLI competition year. I oversaw roughly 10 engineering students in this project. Due to restrictions during the pandemic, the payload was never fully manufactured or launched, but the team presented the full design to NASA in the design division of the competition.

[The full FRR report from our team can be found here.](https://www.erictrimbur.com/s/USLI-2020-2021-FRR-University-of-Pittsburgh.pdf) See section 4 for relevant content.

## Systems Engineering

As the payload team lead, I made executive decision on the system design based on my experience on the team in the prior year. I focused on clearly defining integration guidelines to make sure the subsystems that each member designed would work when manufactured. I clearly defined each subsystem in a project breakdown structure and assigned each member with tasks and subsystems. I guided the team’s design to stay on track with budget and time constraints.

![ALT TEXT](/assets/img/lander1.png)

## Flight Computer

I oversaw and aided with the design of the onboard avionics system. The PCB was designed in EAGLE CAD and is a custom shape to fit inside the lander’s body. I defined the requirements of this system so that it would be fully independent of outside computation and data. An XBee board communicates with the ground station while the self leveling is done using three stepper motors using data from the IMU. A GPS gives us location data for retrieving the payload and all processing is done using a Teensy 4.0 micro controller.

![ALT TEXT](/assets/img/lander2.png)

## Detailed Documentation

As a part of the competition, a proposal, preliminary design review, critical design review, and flight readiness review documents and presentations were prepared. I guided the team in writing this documentation and enforced standards to keep all renderings, drawings, and schematics as uniform as possible within the payload sections. I personally wrote the section on the full system assembly along with the included renders.

The full FRR report from our team can be found here. See section 4 for relevant content.

![ALT TEXT](/assets/img/lander3.png)

## Manufacturing

Due to the pandemic, our team was extremely limited in the time and numbers for manufacturing. Most subsystems were individually manufactured and tested to validate requirements, although full integration testing was never completed. I personally developed a vacuum forming system to make the payload’s airframe. I also led the team in design for manufacturing techniques to make use of available laser cutters and 3D printing.

![ALT TEXT](/assets/img/lander4.jpg)
