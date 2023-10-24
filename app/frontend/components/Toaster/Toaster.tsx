import { createRoot } from 'react-dom/client'
import { OverlayToaster, OverlayToasterProps } from '@blueprintjs/core'

function createToaster(props?: OverlayToasterProps, container = document.body) {
  const containerElement = document.createElement('div')

  container.appendChild(containerElement)

  const root = createRoot(containerElement)

  return new Promise<OverlayToaster>((resolve, reject) => {
    root.render(
      <OverlayToaster
        {...props}
        usePortal={false}
        ref={(instance) => {
          if (!instance) {
            reject(new Error('[Blueprint] Unable to create toaster.'))
          } else {
            resolve(instance)
          }
        }}
      />,
    )
  })
}

const Toaster = await createToaster({ position: 'top' })

export { Toaster }
