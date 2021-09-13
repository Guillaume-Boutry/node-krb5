FROM mcr.microsoft.com/windows/nanoserver:1809

RUN choco install visualcpp-build-tools
RUN choco install nodejs python git
RUN choco install mitkerberos --install-arguments="ADDLOCAL=all"

ENV NPM_CONFIG_LOGLEVEL info

RUN git clone https://github.com/tj/n /n
RUN cd /n && make install
RUN n 14
RUN n 16


RUN New-Item -Name "/node-krb5" -ItemType "directory"
COPY ./run.ps1 /run.ps1
ENTRYPOINT ["/run.ps1"]