#!bin/sh

echo "::debug ::Debug message via shell"
echo "::warning ::warning message via shell"
echo "::error ::error message via shell"

echo "::add-mask::$1"
echo "Hello $1"

time = $(date)
echo "::set-output name=time::$time"

echo "::group::Some exandable logs"
echo "Some stuff"
echo "Some stuff 2"
echo "Some stuff 3"
echo "::endgroup::"

echo "::set-env name=Hello::hello"

