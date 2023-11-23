SPRING = "5.3.17"
SPRING_BOOT = "2.6.4"
MOCKITO_VERSION = "4.5.1"

airy_jvm_deps = [
    "com.amazonaws:aws-java-sdk-core:1.12.595",
    "com.amazonaws:aws-java-sdk-s3:1.12.595",
    "com.fasterxml.jackson.core:jackson-annotations:2.10.0",
    "com.fasterxml.jackson.core:jackson-core:2.10.0",
    "com.fasterxml.jackson.core:jackson-databind:2.10.0",
    "com.fasterxml.jackson.module:jackson-module-afterburner:2.10.0",
    "com.github.everit-org.json-schema:org.everit.json.schema:1.14.0",
    "com.google.auth:google-auth-library-oauth2-http:1.6.0",
    "com.jayway.jsonpath:json-path:2.4.0",
    "com.dinstone:beanstalkc:2.3.0",
    "com.twilio.sdk:twilio:8.27.1",
    "com.viber:viber-bot:1.0.11",
    "io.confluent:kafka-avro-serializer:6.1.1",
    "io.confluent:kafka-schema-registry-client:6.1.1",
    "io.confluent:kafka-schema-registry:6.1.1",
    "io.confluent:kafka-streams-avro-serde:6.1.1",
    "io.jsonwebtoken:jjwt-api:0.11.2",
    "io.jsonwebtoken:jjwt-impl:0.11.2",
    "io.jsonwebtoken:jjwt-jackson:0.11.2",
    "io.micrometer:micrometer-registry-prometheus:1.8.4",
    "javax.activation:javax.activation-api:1.2.0",
    "javax.validation:validation-api:2.0.1.Final",
    "javax.xml.bind:jaxb-api:2.3.1",
    "org.apache.logging.log4j:log4j-core:2.17.2",
    "org.apache.logging.log4j:log4j-slf4j-impl:2.17.2",
    "org.slf4j:slf4j-nop:1.7.32",
    "org.slf4j:slf4j-api:1.7.32",
    "org.apache.avro:avro-tools:1.11.0",
    "org.apache.avro:avro:1.11.0",
    "org.apache.curator:curator-test:4.2.0",
    "org.apache.kafka:connect-api:2.7.0",
    "org.apache.kafka:connect-transforms:2.7.0",
    "org.apache.kafka:kafka-clients:2.7.0",
    "org.apache.kafka:kafka-clients:jar:test:2.7.0",
    "org.apache.kafka:kafka-streams:2.7.0",
    "org.apache.kafka:kafka_2.13:2.7.0",
    "org.apache.lucene:lucene-queryparser:8.7.0",
    "org.apache.lucene:lucene-analyzers-common:8.7.0",
    "org.apache.lucene:lucene-core:8.7.0",
    "org.aspectj:aspectjweaver:1.9.8",
    "org.hamcrest:hamcrest-library:2.1",
    "org.hamcrest:hamcrest:2.1",
    "org.junit.jupiter:junit-jupiter-engine:5.8.1",
    "org.junit.jupiter:junit-jupiter:5.8.1",
    "org.mockito:mockito-core:%s" % MOCKITO_VERSION,
    "org.mockito:mockito-inline:%s" % MOCKITO_VERSION,
    "org.projectlombok:lombok:1.18.10",
    "org.springframework.boot:spring-boot-loader:%s" % SPRING_BOOT,
    "org.springframework.boot:spring-boot-starter-actuator:%s" % SPRING_BOOT,
    "org.springframework.boot:spring-boot-starter-jetty:%s" % SPRING_BOOT,
    "org.springframework.boot:spring-boot-starter-test:%s" % SPRING_BOOT,
    "org.springframework.boot:spring-boot-starter-web:%s" % SPRING_BOOT,
    "org.springframework.boot:spring-boot-starter-websocket:%s" % SPRING_BOOT,
    "org.springframework.boot:spring-boot-starter-security:%s" % SPRING_BOOT,
    "org.springframework.boot:spring-boot-starter-oauth2-client:%s" % SPRING_BOOT,
    "org.springframework.boot:spring-boot-starter-cache:%s" % SPRING_BOOT,
    "org.springframework.security.oauth:spring-security-oauth2:2.4.1.RELEASE",
    "org.springframework.retry:spring-retry:1.3.2",
    "org.springframework:spring-aop:%s" % SPRING,
    "org.springframework:spring-context-support:%s" % SPRING,
    "org.springframework:spring-context:%s" % SPRING,
    "org.springframework:spring-messaging:%s" % SPRING,
    "org.springframework:spring-websocket:%s" % SPRING,
    "org.springframework.security:spring-security-core:5.6.2",
    "org.rocksdb:rocksdbjni:5.18.3",
    "com.segment.analytics.java:analytics-core:3.1.3",
    "com.segment.analytics.java:analytics:3.1.3",
    "io.github.openfeign:feign-core:11.8",
    "io.github.openfeign:feign-jackson:11.8",
    "io.github.openfeign:feign-okhttp:11.8",
    "io.kubernetes:client-java:16.0.0",
    "org.eclipse.jgit:org.eclipse.jgit:6.3.0.202209071007-r",
    "commons-io:commons-io:2.11.0",
]

excluded_artifacts = [
    "ch.qos.logback:logback-classic",
    "org.springframework.boot:spring-boot-starter-tomcat",
    "org.springframework.boot:spring-boot-starter-logging",
    "org.slf4j:slf4j-log4j12",
]
