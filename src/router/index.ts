import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "landing" */ '@/views/LandingPage.vue')
    },
    {
      path: '/section',
      component: () => import('@/views/MainPage.vue'),
      redirect: '/section/1',
      children: [
        {
          path: '1',
          props: {
            section: '1'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/1/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () => import('@/views/recursion/1.vue')
            }
          ]
        },
        {
          path: '2',
          props: {
            section: '2'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/2/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () => import('@/views/recursion/2.vue')
            }
          ]
        },
        {
          path: '3',
          props: {
            section: '3'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/3/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () => import('@/views/recursion/3.vue')
            }
          ]
        },
        {
          path: '4',
          props: {
            section: '4'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/4/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () => import('@/views/recursion/4.vue')
            }
          ]
        },
        {
          path: '5',
          props: {
            section: '5'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/5/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () =>
                import('@/views/recursion/5.vue')
            }
          ]
        },
        {
          path: '6',
          props: {
            section: '6'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/6/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () =>
                import('@/views/recursion/6.vue')
            }
          ]
        },

        // Panel Component 2
        {
          path: '7',
          props: {
            section: '7'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/7/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () =>
                import('@/views/recursion/7.vue')
            }
          ]
        },
        {
          path: '8',
          props: {
            section: '8'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/8/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () =>
                import('@/views/recursion/8.vue')
            }
          ]
        },
        {
          path: '9',
          props: {
            section: '9'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/9/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () =>
                import('@/views/recursion/9.vue')
            }
          ]
        },
        {
          path: '10',
          props: {
            section: '10'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/10/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () =>
                import('@/views/recursion/10.vue')
            }
          ]
        },
        {
          path: '11',
          props: {
            section: '11'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/11/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () =>
                import('@/views/recursion/11.vue')
            }
          ]
        },
        {
          path: '12',
          props: {
            section: '12'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/12/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () =>
                import('@/views/recursion/12.vue')
            }
          ]
        },
        {
          path: '13',
          props: {
            section: '13'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/13/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () =>
                import('@/views/recursion/13.vue')
            }
          ]
        },
        {
          path: '14',
          props: {
            section: '14'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/14/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () =>
                import('@/views/recursion/14.vue')
            }
          ]
        },
        {
          path: '15',
          props: {
            section: '15'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/15/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () =>
                import('@/views/recursion/15.vue')
            }
          ]
        },
        {
          path: '16',
          props: {
            section: '16'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/16/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () =>
                import('@/views/recursion/16.vue')
            }
          ]
        },
        {
          path: '17',
          props: {
            section: '17'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/17/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () =>
                import('@/views/recursion/17.vue')
            }
          ]
        },
        {
          path: '18/:step',
          redirect: '/end',
          name: 'end'
        },
        {
          path: '/cool',
          component: () => import('@/views/TestPage.vue')
        }
      ]
    },
    {
      path: '/end',
      component: () => import('@/views/EndPage.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
