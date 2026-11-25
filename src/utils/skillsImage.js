
import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import typescript from '../assets/svg/skills/typescript.svg'

import angular from '../assets/svg/skills/angular.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import react from '../assets/svg/skills/react.svg'
import svelte from '../assets/svg/skills/svelte.svg'
import vue from '../assets/svg/skills/vue.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import materialUI from '../assets/svg/skills/materialui.svg'
import viteJS from '../assets/svg/skills/vitejs.svg'

import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import redis from '../assets/svg/skills/redis.png'
import sql from '../assets/svg/skills/SQL.png'

import python from '../assets/svg/skills/python.svg'
import java from '../assets/svg/skills/java.svg'
import django from '../assets/svg/skills/django.svg'
import graphql from '../assets/svg/skills/graphql.svg'

import aws from '../assets/svg/skills/aws.svg'
import docker from '../assets/svg/skills/docker.svg'
import git from '../assets/svg/skills/git.svg'

import kotlin from '../assets/svg/skills/kotlin.svg'
import flutter from '../assets/svg/skills/flutter.svg'

// import apacheKafka from '../assets/svg/skills/apache_kafka.jpg'

import figma from '../assets/svg/skills/figma.svg'
import canva from '../assets/svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase().trim()

    switch (skillID) {
        // Frontend Development
        case 'html':
            return html
        case 'css':
            return css
        case 'javascript':
            return javascript
        case 'typescript':
            return typescript
        case 'angular':
            return angular
        case 'next.js':
        case 'next js':
            return nextJS
        case 'react':
            return react
        case 'svelte':
            return svelte
        case 'vue':
        case 'vue.js':
            return vue
        case 'bootstrap':
            return bootstrap
        case 'tailwind':
        case 'tailwind css':
            return tailwind
        case 'material ui':
        case 'materialui':
            return materialUI
        case 'vite.js':
        case 'vitejs':
            return viteJS

        // Backend Development
        case 'python':
            return python
        case 'java':
            return java
        case 'django':
            return django
        case 'graphql':
            return graphql

        // Databases
        case 'mongodb':
            return mongoDB
        case 'mysql':
            return mysql
        case 'postgresql':
            return postgresql
        case 'firebase':
            return firebase
        case 'redis':
            return redis
        case 'sql':
            return sql

        // Cloud & DevOps
        case 'aws':
            return aws
        case 'docker':
            return docker
        case 'git':
        case 'github':
            return git

        // Mobile Development
        case 'kotlin':
            return kotlin
        case 'flutter':
            return flutter

        // Other Technologies
        case 'apache kafka':
            return null
        case 'figma':
            return figma
        case 'canva':
            return canva

        default:
            return null
    }
}
