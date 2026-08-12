import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'ptLight',
    themes: {
      ptLight: {
        dark: false,
        colors: {
          primary: '#C27BA0', secondary: '#E8C7D8', accent: '#86AFA3',
          background: '#F8F4F6', surface: '#FFFFFF', error: '#B42318', success: '#86AFA3',
          'on-primary': '#2B2830', 'on-secondary': '#2B2830', 'on-background': '#2B2830', 'on-surface': '#2B2830', 'on-success': '#2B2830',
        },
      },
    },
  },
  defaults: {
    VBtn: { rounded: 'lg', elevation: 0 },
    VCard: { rounded: 'xl', elevation: 0 },
    VTextField: { variant: 'outlined', color: 'primary' },
    VTextarea: { variant: 'outlined', color: 'primary' },
    VSelect: { variant: 'outlined', color: 'primary' },
  },
})
