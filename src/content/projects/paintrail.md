---
title: "PainTrail"
description: "A private pain diary app for people living with ongoing pain. Quick to fill in, works offline, and keeps your entries on your own phone."
status: "In development"
date: 2026-11-13
tools: ["Flutter", "Dart", "SQLite"]
tags: ["App building", "Riptide Digital"]
featured: true
current: true
---

## Overview

PainTrail is a pain diary app for anyone living with ongoing pain. It is the first app
from Riptide Digital, my app studio. It is in development now and will come to Android
first.

## Context

Keeping a record of pain is useful, especially when you see a doctor only every few
weeks or months and need to remember how things have actually been. In practice, most
people stop keeping a diary because it takes too long or asks for too much.

## Problem

I wanted a diary that takes about a minute a day, shows only what matters to the
person using it, and does not need an account or an internet connection. Health notes
are personal, so the entries should stay on the phone unless the owner chooses to
export them.

## Approach

- A short daily check-in: overall pain from 0 to 10, where it hurts on a body map, and
  a few wellbeing measures such as sleep and fatigue.
- A quick way to log a flare when it happens.
- A simple log of medications and treatments.
- A calendar history and trend charts, so patterns are easier to see.
- No account, no tracking and no ads. The core diary is free.

A summary report to take to appointments is planned for a later version.

PainTrail is a record-keeping tool. It does not give medical advice.

## Tools

Flutter and Dart, with the data stored on the device in SQLite.

## Status

In development. Android comes first, with iPhone to follow.

## What I learned

So far: deciding what to leave out is most of the work. Every extra question in the
daily check-in makes it less likely someone will still be using the diary in a month.
