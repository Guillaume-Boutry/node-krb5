
while (!(Test-Path "C:/tmp/krb5_test/rest_ready")) {
    Write-Host "Waiting for REST server to be ready..."
    Start-Sleep 1
}
Set-Location "/node-krb5"
Copy-Item "/tmp/krb5_test/krb5.conf" -Destination "/etc/krb5.conf"
Foreach ($node_version in @("16", "14")) {
  Write-Host "Node.js version "$node_version
  n $node_version
  # --unsafe-perm allows node-gyp build as root
  # --force forces reinstallation
  npm install --unsafe-perm --force
  npm test
  err=$LASTEXITCODE
  If ($err -ne 0 ){
    Write-Host -ForegroundColor RED "Tests failed for Node.js $node_version"
    Exit $err
  }
  Else {
    Write-Host -ForegroundColor GREEN "Tests passed for Node.js $node_version"
  }
}
Write-Host -ForegroundColor GREEN  "Tests passed for Node.js version 14 and 16"
exit 0