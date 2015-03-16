#!/bin/bash

echo "Checking javascript code quality"
gjslint -r . $(< closure-lint.cfg)
RETVAL=$?
exit $RETVAL
