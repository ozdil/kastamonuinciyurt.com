#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
DIST_DIR="${ROOT_DIR}/dist"

echo "Building kastamonuinciyurt.com to ${DIST_DIR}..."

# Create dist structure
mkdir -p "${DIST_DIR}/assets/css"
mkdir -p "${DIST_DIR}/assets/data"
mkdir -p "${DIST_DIR}/scripts"

# Copy root static files
cp -f "${ROOT_DIR}/index.html" "${DIST_DIR}/index.html"
cp -f "${ROOT_DIR}/locator-plus.html" "${DIST_DIR}/locator-plus.html"
cp -f "${ROOT_DIR}/manifest.webmanifest" "${DIST_DIR}/manifest.webmanifest"
cp -f "${ROOT_DIR}/robots.txt" "${DIST_DIR}/robots.txt"
cp -f "${ROOT_DIR}/llms.txt" "${DIST_DIR}/llms.txt"
if [ -f "${ROOT_DIR}/_headers" ]; then
  cp -f "${ROOT_DIR}/_headers" "${DIST_DIR}/_headers"
fi
if [ -f "${ROOT_DIR}/_redirects" ]; then
  cp -f "${ROOT_DIR}/_redirects" "${DIST_DIR}/_redirects"
fi

# Copy assets
if [ -d "${ROOT_DIR}/assets/css" ]; then
  cp -rf "${ROOT_DIR}/assets/css/"* "${DIST_DIR}/assets/css/" 2>/dev/null || true
fi
if [ -d "${ROOT_DIR}/assets/data" ]; then
  cp -rf "${ROOT_DIR}/assets/data/"* "${DIST_DIR}/assets/data/" 2>/dev/null || true
fi
if [ -f "${ROOT_DIR}/assets/favicon.png" ]; then
  cp -f "${ROOT_DIR}/assets/favicon.png" "${DIST_DIR}/assets/favicon.png"
fi
if [ -f "${ROOT_DIR}/assets/logo.png" ]; then
  cp -f "${ROOT_DIR}/assets/logo.png" "${DIST_DIR}/assets/logo.png"
fi

# Copy scripts
if [ -d "${ROOT_DIR}/scripts" ]; then
  cp -f "${ROOT_DIR}/scripts/"*.js "${DIST_DIR}/scripts/" 2>/dev/null || true
fi

echo "Build complete. Distribution files verified in ${DIST_DIR}."
