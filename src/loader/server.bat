@set _7z="%ProgramFiles%\7-Zip\7z.exe"
@set curl=%CD%\curl.exe
@set https_proxy=http://proxy.tpe.sap.corp:8080
@set http_proxy=http://proxy.tpe.sap.corp:8080
@set no_proxy=


@where node >nul
@if %errorlevel% neq 0 (
    @if not exist _ (
        @echo nodejs is not installed, download and configure it automatically.

        @if not exist "%curl%" (
            @if not exist %_7z% (
                @echo cannot find file %_7z%, install it and restart the script!
                @goto :eof
            )
            @call %_7z% x curl.exe.7z
        )

        @call %curl% -o node.msi http://nodejs.org/dist/v0.12.0/x64/node-v0.12.0-x64.msi
        @call msiexec /a node.msi /qn TARGETDIR=%CD%\_
        @del node.msi
        @del %curl%
    )
    @set "Path=%Path%;%CD%\_\nodejs"

    @where node >nul
    @if %errorlevel% neq 0 (
        @echo cannot find nodejs even it was installed, exit.
        @goto :eof
    )
)



@call nodevars


@call npm ls -g bower >nul
@if %errorlevel% neq 0 (
    @echo npm install bower
    @call npm i -g bower
)
@call npm ls -g tsd >nul
@if %errorlevel% neq 0 (
    @echo npm install tsd
    @call npm i -g tsd@next
)
@call npm update
@call tsd update
@call tsd rebundle
@call bower list -o | findstr "not\ installed" >nul
@if %errorlevel% equ 0 (
    @echo bower install ...
    @call bower install
)


@if not exist "..\thirdparty" (
    @echo create thirdparty dir
    
    @mkdir -p ..\thirdparty\resources
    @mklink /J ..\thirdparty\resources\thirdparty bower_components
    @mklink /J ..\thirdparty\resources\thirdparty.d tsd_modules
)


@call node server