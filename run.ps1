# @echo off
# 转换文件格式
$content = Get-Content -Raw -Path .\scripts\run_for_local.sh -Encoding utf8
$content = $content -replace "`r$", ""
# 移除 BOM
$content = $content -replace '^\xef\xbb\xbf', ''
$content = $content -replace '^\xff\xfe', ''
$content = $content -replace '^\xfe\xff', ''
$content = $content -replace '^\xff\xfe\x00\x00', ''
$content = $content -replace '^\x00\x00\xfe\xff', ''
# 移除文件结尾的空白字符并添加一个新行
$content = $content -replace "\s+$", "`n"

# 设置编码和写入文件
$content | Set-Content -Path .\scripts\run_for_local.sh -Encoding UTF8 -NoNewline

# 判断Docker容器是否启动
$dockerStatus = Get-Service | Where-Object {$_.DisplayName -like '*Docker*'} | Select-Object -ExpandProperty Status

if ($dockerStatus -eq 'Running') {
    Write-Host "Docker is running."
} else {
    Write-Host "Docker is not run."
    return
}

# 启动 Docker 容器
docker-compose -f docker-compose-windows.yaml up qanything_local