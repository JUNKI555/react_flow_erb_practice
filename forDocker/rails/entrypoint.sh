#!/bin/bash
set -e

# Reference by https://matsuand.github.io/docs.docker.jp.onthefly/compose/rails/
# Remove a potentially pre-existing server.pid for Rails.
rm -f /app/tmp/pids/server.pid

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
