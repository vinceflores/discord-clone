# Discord Clone

> A clone of discord built using convex

Convex is a backend as a service application that allows you to create full-stack applications without worrying about the infrastructure. Convex comes with following out of the box.

- Database
- Realtime
- Authentication integration with either Auth0 or Clerk
- File Storage
- Scheduulers for cron jobs

### Tech Stack

- Convex
  - realtime database
  - file storage
- Clerk for authentication
- Nextjs + Shadcn UI + TailwindCSS
- Typescript


### Timeline

<details>
    <summary>Mon August 5 2024 </summary>

    - Read Convex Docs
        - What are difference between Queries, Mutations, Actions?
    - Set up Project 
        -  nextjs app
        -  Clerk with convex
        -  Shadcn ui
    - Database design + workflow + prototyping functions
    
    Today we learned that it is not necessary to sync clerk with convex database because user info is loadded using 

    ```typescript
        "use client"
        const { user } = useUser()

    ```
</details>
