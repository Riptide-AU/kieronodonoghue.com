---
title: "Construction Estimating and Project Suite"
description: "A bespoke suite of software for the construction industry, covering estimating and project management behind one sign-in."
status: "In development"
date: 2026-10-01
tools: ["TypeScript", "PostgreSQL", "Docker"]
tags: ["Web development", "Construction", "Business systems"]
featured: false
current: true
---

## Overview

A suite of web software for construction businesses. It brings estimating and project
management together behind one sign-in, so the numbers from a tender carry through to
the job that follows.

## Context

Construction businesses often run estimating in one tool, project tracking in another
and reporting in spreadsheets. Getting information from one to the next is slow, and
past tenders are hard to learn from when the data is difficult to get out.

## Problem

I wanted estimates, budgets and project records to live in one connected place, with
clean data that is easy to extract and report on later. Making past information easy
to reach was one of the main reasons for starting.

## Approach

- Separate modules for estimating and for projects, each focused on one job.
- A shared front door: one sign-in, one set of roles and permissions, one look and feel.
- Each company's data is kept separate.
- Built in stages, with the foundations and security model written down before the code.

## Tools

TypeScript, PostgreSQL and Docker.

## Status

In development.

## What I learned

The hardest part is rarely a single screen. It is agreeing what things are called and
who is allowed to do what, then holding every module to the same answer.
