defmodule TictactoeGameWeb.PageController do
  use TictactoeGameWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
