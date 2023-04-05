from django.http import JsonResponse

def getRoutes(request):

    routes = [
        {'GET': '/api/todos'}
    ]

    return JsonResponse(routes, safe=False)