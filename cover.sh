rm -rf ./coverage
deno test -A --coverage=coverage
deno coverage ./coverage
