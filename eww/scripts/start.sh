eww daemon

# Show bar on laptop screen
hyprctl dispatch focusmonitor 0
eww open laptop --screen 0

# Show bar on external screen if connected
NB_MONITORS=$(hyprctl monitors -j | jq length)
if [ "$NB_MONITORS" -eq "2" ]; then
    hyprctl dispatch focusmonitor 1
    eww open external --screen 1
fi
