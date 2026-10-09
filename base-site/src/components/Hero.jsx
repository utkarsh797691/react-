import Button from './Button.jsx'
import HeroVisual from './HeroVisual.jsx'

export default function Hero() {
  return (
    <section className="pb-16 pt-12 lg:pb-0 lg:pt-[96px]">
      <div className="mx-auto max-w-[1326px] px-6 lg:px-10 xl:px-0">
        <div className="relative z-10 lg:max-w-[48%] xl:max-w-[640px]">
          <h1 className="animate-fade-up font-display text-[34px] font-medium leading-[1.2] text-ink sm:text-[42px] lg:text-[44px] xl:text-[50px] xl:leading-[62px]">
            We specialize in UI/UX, Web Development, Digital Marketing.
          </h1>
          <p className="mt-6 max-w-[500px] animate-fade-up text-base leading-[26px] text-mute [animation-delay:150ms]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus consequat varius nisi quis, posuere magna.
          </p>
          <div className="mt-9 flex animate-fade-up flex-col items-start gap-5 [animation-delay:300ms] sm:flex-row sm:items-center">
            <Button
              className="h-[54px] w-[188px] text-base bg-blue-500 text-white hover:bg-blue-700"
              aria-label="Get started now"
            >
              Get Started Now
            </Button>
            <div>
              <p className="text-lg text-ink">Call us 7976914642</p>
              <p className="text-base text-mute">For any question or concern</p>
            </div>
          </div>
        </div>
      </div>
      <HeroVisual />
    </section>
  )
}
