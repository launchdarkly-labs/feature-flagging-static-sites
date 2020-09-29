# Feature flag strategies with static sites

This page is a static HTML page that uses LaunchDarkly to control 
the background color. This demonstrates the effect of the delay
introduced when the LaunchDarkly client isn't bootstrapped with
an initial set of flags.

When you load this page, you'll notice that the blue background
color appears after the page is initially rendered. This is
because there's JS that determines what the background color
should be based on a feature flag in LaunchDarkly.

The delay is introduced by the LaunchDarkly client initialization.
To see the effect more pronouncely, you should disable cache on
your browser when you load this page.

To read more about how to prevent this, read our guide on [using
feature flags on static sites](https://docs.launchdarkly.com/guides/best-practices/using-feature-flags-on-static-sites)