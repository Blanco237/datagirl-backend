import { render } from "@react-email/components"
import * as React from 'react'

export default async function  renderer()  {
    const WelcomeEmail = (await import('./emails/Welcome.jsx')).default
    console.log(WelcomeEmail);
    const html = render(WelcomeEmail())
    return html
}