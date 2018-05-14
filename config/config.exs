# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :tictactoe_game,
  ecto_repos: [TictactoeGame.Repo]

# Configures the endpoint
config :tictactoe_game, TictactoeGameWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "uowvyDqtF73dS2pmu2Ycf0z18kQdafIfd79+TfsyL1fZraOF5TVBS5qFZ8CURmYA",
  render_errors: [view: TictactoeGameWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: TictactoeGame.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
