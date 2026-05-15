import { createClient } from '@sanity/client'

export const sanityClient = createClient({
    projectId: 'zxpwxip2',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2026-04-22',
    token: 'skwSeJhAtiQCKR9AqfrPFN4ZQeUNAZtJK8lqwjJWDycSErLOowm7Ab3cpawbi9rJ9XBCSMos37MODE0f9nd6xyTSWaFwtROY4WPq08Fxi8SLNgNjNoUrgjUNedQ61AMxJlzCpkhMNFINWRd9dGo4G91M7yNszm2CanP34XpaxthMvziBCIm6'
})

export default sanityClient