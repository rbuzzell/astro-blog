---
title: 'CodeClimate in Gitlab CI'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'August 3 2017'
heroImage: '/blog-placeholder-3.jpg'
---

Recently I tried pulling code climate into GitLab CE's CI. This became slightly problematic since docker-in-docker wasn't working properly. I installed it according to the site directions, but the config didn't work. After about a day of tinkering, configuring it this way appears to work pretty well.

`.gitlab-vi.yml`
```
codeclimate:
  image: docker:latest
  variables:
    DOCKER_DRIVER: overlay
  services:
    - docker:dind
  script:
    - docker pull codeclimate/codeclimate
    - VOLUME_PATH=/tmp/builds"$(echo $PWD | sed 's|^/[^/]*||')"
    - docker run -v /tmp/cc:/tmp/cc -v $VOLUME_PATH:/code -v /var/run/docker.sock:/var/run/docker.sock codeclimate/codeclimate validate-config
    - ls -lash $PWD
    - echo $PWD
    - docker run --env CODECLIMATE_CODE="$VOLUME_PATH" -v /tmp/cc:/tmp/cc -v $VOLUME_PATH:/code -v /var/run/docker.sock:/var/run/docker.sock codeclimate/codeclimate analyze
  artifacts:
    paths: [codeclimate.json]%
```
`/etc/gitlab-runner/config.toml`
```
concurrent = 1
check_interval = 0

[[runners]]
  name = "gitlabrunner-01"
  url = "https://gitlab.gqdn/"
  token = "token"
  executor = "docker"
  [runners.docker]
    tls_verify = false
    image = "docker:latest"
    privileged = true
    disable_cache = false
    volumes = ["/cache"]
    shm_size = 0
  [runners.cache]

[[runners]]
  name = "Ubuntu 16.04 Runner 01"
  url = "https://gitlab.fqdn/"
  token = "token"
  executor = "docker"
  [runners.docker]
    tls_verify = false
    image = "docker:latest"
    privileged = true
    disable_cache = false
    cache_dir = "cache"
    volumes = ["/cache", "/var/run/docker.sock:/var/run/docker.sock", "/tmp/builds:/builds"]
    shm_size = 0
  [runners.cache]
```