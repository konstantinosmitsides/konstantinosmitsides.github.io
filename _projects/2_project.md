---
layout: page
title: Kiraka
description: Speed Reading Platform
img: assets/img/kiraka.ico
importance: 2
category: ML Software Engineering
giscus_comments: false
---

This is the work of my group project in MSc AI at Imperial. For the technical details, please look at the [report](/assets/pdf/kiraka_report.pdf).

## Project Overview

Kiraka.ai is designed to explore the potential of speed reading and its impact on comprehension, pushing the boundaries of how information is absorbed. Our tools dynamically adjust to your reading pace and style, challenging your limits and enhancing comprehension through two primary modes: ***DocMode*** and ***FlashMode***.

## Key Features

- **DocMode**: See the full text, add a pointer to follow the pace you set, or bold the beginning of words to help you focus.
- **FlashMode**: Read text in chunks, displayed sequentially to improve focus and speed, with optional real-time eye tracking to adapt to your reading speed. 
- **Real-Time Adjustments**: Uses [WebGazer](https://webgazer.cs.brown.edu/)'s eye-tracking technology to adjust the WPM (Words Per Minute) dynamically in FlashMode.

## Reading Modes

*It is worth noting that each reading mode described below dynamically adjusts the starting reading speed, expressed in Words Per Minute (WPM), based on the user's previous performance within that specific mode.*

### DocMode
In DocMode, you have the freedom to see the whole text and read it at your own pace. We also have some extra features you may find useful. These are controlled via the control panel above the text.

Features include:
- **Pointer:** Enhance your reading with a karaoke-style pointer. Customise the pointer by adjusting its length and colour for optimal tracking, and set its speed to match your preferred reading pace WPM.
- **HyperBold:** Bold the beginning of words to create artificial fixation points with varying degrees. This feature helps in improving reading speed by guiding your visual focus.
- **Others:**
    - **Dark Mode:** Switch to Dark Mode for a reading experience in low-light conditions.
    - **Focused Reading:** Choose to only display the pointer, hiding the rest of the text. This helps minimise regression (unnecessary re-reading), enhancing concentration.
    - **Customisation:** Freely adjust the font size to suit your visual preference, ensuring comfort and readability.


### FlashMode
Explore two configurations: **Static** and **Adaptive**.

- **Static**: Chunks of text appear in brief, rapid bursts or "flashes". Manually adjust speed with arrow keys. Pause, start, or restart at any time.

- **Adaptive (Recommended)**: Integrates WebGazer's eye-tracking to automatically adjust your WPM, encouraging faster reading. Manual WPM adjustments are still available.

\
**Adaptive Complexity Adjustment:**
\
FlashMode Adaptive not only adapts to your reading speed through your gaze but also adjusts based on the lexical complexity of each text chunk. Leveraging a pre-trained Large Language Model (LLM), each chunk is scored for complexity. This score is then used to adjust the WPM for subsequent chunks, ensuring that the reading challenge is optimised for your comprehension and speed. This dynamic adjustment process happens after each chunk is displayed, allowing for a seamless reading experience.

\
**Difficulty Levels:**
\
FlashMode Adaptive offers three levels of difficulty, each designed to cater to different user proficiencies:

- **Beginner:** Ideal for those new to speed reading.
- **Intermediate:** For readers with some experience in dynamic reading environments.
- **Expert:** For those who seek to challenge their reading capabilities to the limit.

### AI Quiz Generation
After your reading sessions, AI-generated quizzes designed to test comprehension will be presented. These quizzes are crucial for addressing the trade-offs between speed and comprehension commonly seen with traditional speed reading techniques. Currently being refined for improved question generation, this feature also accommodates ***user-uploaded texts***, reinforcing our commitment to user-centric learning experiences.

### User Analytics
Kiraka.ai provides an analytics page to help users track their reading (average WPM) and comprehension performance (Quiz Score). Displayed through informative graphs, these analytics allow users to reflect on their progress and stay motivated, ideal for those looking to systematically enhance their reading skills.


## Authors
- *Konstantinos Mitsides* **(konstantinos.mistides23@imperial.ac.uk)**
- *Fadi Zahar* **(fadi.zahar23@imperial.ac.uk)**
- *Kyoya Higashino* **(kyoya.higashino23@imperial.ac.uk)**
- *Matis Bodaghi* **(matis.bodaghi23@imperial.ac.uk)**
- *Jack Hau* **(jack.hau23@imperial.ac.uk)**
- *Evangelos Georgiadis* **(evangelos.geordiadis23@imperial.ac.uk)**
