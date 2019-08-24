# Clockwise
A NodeJS time clock for simple management of employee hours.

Clockwise will allow employees to clock in and out using a mobile web app.

Administrators will be able to add or remove employees, add or modify their clocking, and generate CSVs to transfer employee hours into other systems.

## Goals
First and foremost, Clockwise aims to be easy to use for both administrators and employees.

The feature set is intentionally slim so as to allow for the tool to be used differently by different organizations.

## Technologies
Clockwise is written in NodeJS and uses SQLite as a datastore.

The server is written using Express and database queries are constructed via K'NEX.
